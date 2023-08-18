package com.stackoverflow.Server.comment.dto;

import com.stackoverflow.Server.member.entity.Member;
import com.stackoverflow.Server.question.entity.Question;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CommentResponseDto {

    private Long commentId;
    private Long memberId;
    private Long questionId;
    private String nickname;
    private String commentBody;
    private LocalDateTime createdAt;

    public Member getMember(){
        Member member = new Member();
        member.setMemberId(memberId);
        member.setNickname(nickname);
        return member;
    }

    public Question getQuestion(){
        Question question = new Question();
        question.setQuestionId(questionId);
        return question;
    }
}
