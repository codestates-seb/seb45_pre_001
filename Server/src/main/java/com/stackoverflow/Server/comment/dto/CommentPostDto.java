package com.stackoverflow.Server.comment.dto;

import com.stackoverflow.Server.comment.entity.Comment;
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

    private String nickname;

    @NotEmpty(message = "답변 내용을 작성해주세요.") //논의 필요
    private String commentBody;


}