package com.stackoverflow.Server.comment.mapper;

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

    default CommentResponseDto commentToCommentResponseDto (Comment comment){
        CommentResponseDto commentResponseDto = new CommentResponseDto();

        commentResponseDto.setCommentId(comment.getCommentId());
        commentResponseDto.setQuestionId(comment.getQuestion().getQuestionId());
        commentResponseDto.setNickname(comment.getNickname());
        commentResponseDto.setCommentBody(comment.getCommentBody());
        commentResponseDto.setCreatedAt(comment.getCreatedAt());

        return commentResponseDto;
    }

    List<CommentResponseDto> commentsToCommentsResponseDto (List<Comment> comments);

}
