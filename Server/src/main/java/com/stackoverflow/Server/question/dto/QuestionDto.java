package com.stackoverflow.Server.question.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

public class QuestionDto {

    @Getter
    @AllArgsConstructor
    public static class Post {
        private String title;
        private String questionBody;
    }
}
