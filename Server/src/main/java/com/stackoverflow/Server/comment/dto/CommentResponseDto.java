package com.stackoverflow.Server.comment.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CommentResponseDto {

    private Long commentId;
    private Long questionId;
    private String nickname;
    private String commentBody;
    private LocalDateTime createdAt;
}
