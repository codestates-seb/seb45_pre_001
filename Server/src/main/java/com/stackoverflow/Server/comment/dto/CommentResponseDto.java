package com.stackoverflow.Server.comment.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class CommentResponseDto {
    private Long commentId;
    private String commentBody;
}
