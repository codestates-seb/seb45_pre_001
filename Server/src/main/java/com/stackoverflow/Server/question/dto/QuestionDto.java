package com.stackoverflow.Server.question.dto;

import com.stackoverflow.Server.member.entity.Member;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;


public class QuestionDto {

    @Getter
    @Setter
    @NoArgsConstructor
    public static class Post {
        private long memberId;
        @NotBlank
        private String nickname;
        @NotBlank
        private String title;
        @NotBlank
        private String questionBody;

        public Member getMember() {
            Member member = new Member();
            member.setMemberId(memberId);
            member.setNickname(nickname);
            return member;
        }
    }
    @Getter
    @Setter
    @NoArgsConstructor
    public static class Patch{
        private long questionId;
        private long memberId;
        private String nickname;
        private String title;
        private String questionBody;

        public Member getMember() {
            Member member = new Member();
            member.setMemberId(memberId);
            member.setNickname(nickname);
            return member;
        }
    }

    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class search {
        private long questionId;
        private String title;
        private String questionBody;
    }
}
