package com.stackoverflow.Server.question.dto;

import lombok.*;

public class QuestionDto {

    @Getter
    @Setter
    @NoArgsConstructor
    public static class Post {
        private long memberId;
        private String title;
        private String body;

    }

    @AllArgsConstructor
    @Getter
    public static class response {
        private long questionId;
        private String title;
        private String body;
    }
}
