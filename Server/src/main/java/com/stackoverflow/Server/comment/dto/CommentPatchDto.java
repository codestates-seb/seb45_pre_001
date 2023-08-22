package com.stackoverflow.Server.comment.dto;

import com.stackoverflow.Server.member.entity.Member;
import com.stackoverflow.Server.question.entity.Question;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotEmpty;

@Getter
@Setter
@NoArgsConstructor
public class CommentPatchDto {

    private Long commentId;

    @NotEmpty(message = "답변 내용을 작성해주세요.") //논의 필요
    private String commentBody;


}
