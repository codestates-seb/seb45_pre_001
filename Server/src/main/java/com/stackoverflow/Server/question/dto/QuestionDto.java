package com.stackoverflow.Server.question.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

public class QuestionDto {

    @Getter
    @AllArgsConstructor
    public static class Post {
        private String title;
        private String questionBody;

        public Post() {
        }
    }

    @AllArgsConstructor
    @Getter
    public static class response {
        private long questionId;
        private String title;
        private String questionBody;
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
