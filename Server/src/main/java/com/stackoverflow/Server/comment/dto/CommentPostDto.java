package com.stackoverflow.Server.comment.dto;

import com.stackoverflow.Server.comment.entity.Comment;
import com.stackoverflow.Server.member.entity.Member;
import com.stackoverflow.Server.question.entity.Question;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotEmpty;


@Getter
@Setter
@NoArgsConstructor
public class CommentPostDto {

    private Long questionId;

    private Long memberId;

    private String nickname;

    @NotEmpty(message = "답변 내용을 작성해주세요.") //논의 필요
    private String commentBody;

    public Member getMember(){
        Member member = new Member();
        member.setMemberId(memberId);
        member.setNickname(nickname);

        return member;
    }

    public Question getQuestion (){
        Question question = new Question();
        question.setQuestionId(questionId);
        return question;
    }

}
