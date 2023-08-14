package com.stackoverflow.Server.question.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

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
    public static class search {
        private String title;
        private String questionBody;
    }
}
