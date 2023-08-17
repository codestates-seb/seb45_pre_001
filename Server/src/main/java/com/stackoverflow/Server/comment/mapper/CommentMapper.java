package com.stackoverflow.Server.comment.mapper;

import com.stackoverflow.Server.comment.dto.CommentPostDto;
import com.stackoverflow.Server.comment.dto.CommentResponseDto;
import com.stackoverflow.Server.comment.entity.Comment;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.time.LocalDateTime;
import java.util.List;


@Mapper(componentModel = "spring")
public interface CommentMapper {
  //  @Mapping(source = "memberId", target = "member.memberId")
    @Mapping(source = "questionId", target = "question.questionId")
    Comment commentPostDtoToComment (CommentPostDto commentPostDto);

    default CommentResponseDto commentToCommentResponseDto (Comment comment){

        CommentResponseDto.CommentResponseDtoBuilder commentResponseDtoBuilder = CommentResponseDto.builder();

        commentResponseDtoBuilder.commentId(comment.getCommentId());
        commentResponseDtoBuilder.questionId(comment.getQuestionId());
        commentResponseDtoBuilder.nickname(comment.getNickname());
        commentResponseDtoBuilder.commentBody(comment.getCommentBody());
        commentResponseDtoBuilder.createdAt(comment.getCreatedAt());

        return commentResponseDtoBuilder.build();
    }

    //List<CommentResponseDto> commentsToCommentsResponseDto (List<Comment> comments);

}
