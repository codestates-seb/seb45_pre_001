package com.stackoverflow.Server.comment.service;

import com.stackoverflow.Server.comment.entity.Comment;
import com.stackoverflow.Server.comment.repository.CommentRepository;
import com.stackoverflow.Server.exception.BusinessLogicException;
import com.stackoverflow.Server.exception.ExceptionCode;
import com.stackoverflow.Server.member.service.MemberService;
import com.stackoverflow.Server.question.entity.Question;
import com.stackoverflow.Server.question.service.QuestionService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class CommentService {
    private final CommentRepository commentRepository;
    private final QuestionService questionService;
    private final MemberService memberService;

    public CommentService(CommentRepository commentRepository, QuestionService questionService, MemberService memberService) {
        this.commentRepository = commentRepository;
        this.questionService = questionService;
        this.memberService = memberService;
    }

    //질문에 대한 답변 생성
    public Comment createComment (Comment comment) {
        //회원이 존재하는지 확인
        memberService.findMember(comment.getMember().getMemberId());

        //질문이 존재하는지 확인
     Question question = questionService.findQuestion(comment.getQuestion().getQuestionId());

        //질문 상태 변경
        question.setQuestionStatus(Question.QuestionStatus.QUESTION_COMMENTED);

        comment.setQuestion(question);

        //질문의 댓글 카운트 증가
        long count = question.getCommentCount();
        question.setCommentCount(count+1);

        return commentRepository.save(comment);
    }

    //답변 수정
    public Comment updateComment (Comment comment){
        Comment findComment = findVerifiedComment(comment.getCommentId());

        Optional.ofNullable(comment.getCommentBody())
                .ifPresent(body -> findComment.setCommentBody(body));

        return commentRepository.save(findComment);
    }


    //질문에 대한 답변 전체 조회
    public List<Comment> findCommentAll(long questionId){
        return commentRepository.findByIdWithAll(questionId);
    }


    //해당 답변 조회
    public Comment findVerifiedComment (long commentId){
        Optional<Comment> comment = commentRepository.findById(commentId);

        Comment findComment = comment.orElseThrow(()-> new BusinessLogicException(ExceptionCode.COMMENT_NOT_FOUND));
        return findComment;
    }

    //답변 삭제
    public void deleteComment (long questionId , long commentId){
        Comment findComment = findVerifiedComment(commentId);

        //질문이 존재하는지 확인
        Question question = questionService.findQuestion(questionId);

        //답변 카운트 제거
        long count = question.getCommentCount();
        question.setCommentCount(count-1);
        System.out.println(count);
        System.out.println(question.getCommentCount());

        //질문 상태 변경
        if (question.getCommentCount() == 0){
            question.setQuestionStatus(Question.QuestionStatus.QUESTION_NOT_COMMENTED);
        }

        commentRepository.deleteById(commentId);
    }

}
