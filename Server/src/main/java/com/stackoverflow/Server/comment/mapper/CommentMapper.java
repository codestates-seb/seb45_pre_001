package com.stackoverflow.Server.comment.mapper;

import com.stackoverflow.Server.comment.dto.CommentPostDto;
import com.stackoverflow.Server.comment.dto.CommentResponseDto;
import com.stackoverflow.Server.comment.entity.Comment;
import org.mapstruct.Mapper;


@Mapper(componentModel = "spring")
public interface CommentMapper {
    Comment commentPostDtoToComment (CommentPostDto commentPostDto);
    CommentResponseDto commentToCommentResponseDto (Comment comment);

}
