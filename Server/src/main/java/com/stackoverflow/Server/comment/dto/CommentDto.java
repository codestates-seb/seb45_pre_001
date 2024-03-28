package com.stackoverflow.Server.comment.dto;

import com.stackoverflow.Server.member.entity.Member;
import com.stackoverflow.Server.question.entity.Question;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;

public class CommentDto {

    @Getter
    @Setter
    @NoArgsConstructor
    public static class Post{

        private long questionId;

        private long memberId;

        private String nickname;

        @NotEmpty(message = "답변 내용을 작성해주세요.")
        private String commentBody;

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

    @Getter
    @Setter
    @NoArgsConstructor
    public static class Patch{
        private Long commentId;

        @NotEmpty(message = "답변 내용을 작성해주세요.")
        private String commentBody;
    }
}
