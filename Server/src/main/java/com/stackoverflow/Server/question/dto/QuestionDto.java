package com.stackoverflow.Server.question.dto;

import com.stackoverflow.Server.member.entity.Member;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

public class QuestionDto {

    @Getter
    @Setter
    @NoArgsConstructor
    public static class Post {
        private long memberId;
        private String title;
        private String body;

        public Member getMember() {
            Member member = new Member();
            member.setMemberId(memberId);
            return member;
        }
    }

    @AllArgsConstructor
    @Getter
    public static class response {
        private long questionId;
        private String title;
        private String body;
    }

    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class search {
        private long questionId;
        private String title;
        private String body;
    }
}
