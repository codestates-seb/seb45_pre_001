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

        return commentRepository.save(comment);
    }

    //답변 조회
    @Transactional(readOnly = true)
    public Comment findCommentAll(long questionId){
        return findVerifiedComment(questionId);
    }


    //답변 찾기
    public Comment findVerifiedComment (long questionId){
        Optional<Comment> comment = commentRepository.findById(questionId);

        Comment findComment = comment.orElseThrow(()-> new BusinessLogicException(ExceptionCode.COMMENT_NOT_FOUND));
        return findComment;
    }

}
