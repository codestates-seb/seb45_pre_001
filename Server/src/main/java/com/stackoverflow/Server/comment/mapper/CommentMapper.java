package com.stackoverflow.Server.comment.mapper;

import com.stackoverflow.Server.comment.dto.CommentPatchDto;
import com.stackoverflow.Server.comment.dto.CommentPostDto;
import com.stackoverflow.Server.comment.dto.CommentResponseDto;
import com.stackoverflow.Server.comment.entity.Comment;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingConstants;

import java.time.LocalDateTime;
import java.util.List;


@Mapper(componentModel = MappingConstants.ComponentModel.SPRING)
public interface CommentMapper {

    @Mapping(source = "questionId", target = "question.questionId")
    @Mapping(source = "memberId", target = "member.memberId")
    Comment commentPostDtoToComment (CommentPostDto commentPostDto);

    Comment commentPatchDtoToComment (CommentPatchDto commentPatchDto);

    CommentResponseDto commentToCommentResponseToDto (Comment comment);

    List<CommentResponseDto> commentsToCommentsResponseDto (List<Comment> comments);

}
