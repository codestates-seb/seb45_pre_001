package com.stackoverflow.Server.comment.service;

import com.stackoverflow.Server.comment.entity.Comment;
import com.stackoverflow.Server.comment.repository.CommentRepository;
import com.stackoverflow.Server.member.entity.Member;
import com.stackoverflow.Server.member.service.MemberService;
import com.stackoverflow.Server.question.entity.Question;
import com.stackoverflow.Server.question.service.QuestionService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class CommentService {
    private final MemberService memberService;
    private final QuestionService questionService;
    private final CommentRepository commentRepository;

    public CommentService(MemberService memberService, QuestionService questionService, CommentRepository commentRepository) {
        this.memberService = memberService;
        this.questionService = questionService;
        this.commentRepository = commentRepository;
    }

    //질문에 대한 답변 생성
    public Comment createComment (Comment comment) {
        //회원이 존재하는지 확인
        //memberService.findMember(comment.getMember().getMemberId());

        //질문이 존재하는지 확인
        //Question question = questionService.findQuestions();

        //comment.setQuestion(question);

        return commentRepository.save(comment);
    }

    //답변 조회
    public Comment findComments(){
        return null;
    }
}