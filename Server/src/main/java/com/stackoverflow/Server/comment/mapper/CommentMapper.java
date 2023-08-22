package com.stackoverflow.Server.comment.mapper;

import com.stackoverflow.Server.comment.dto.CommentDto;
import com.stackoverflow.Server.comment.dto.CommentResponseDto;
import com.stackoverflow.Server.comment.entity.Comment;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;


@Mapper(componentModel = "spring")
public interface CommentMapper {

    @Mapping(source = "questionId", target = "question.questionId")
    @Mapping(source = "memberId", target = "member.memberId")
    @Mapping(source = "nickname", target = "member.nickname")
    Comment commentPostDtoToComment (CommentDto.Post post);
    Comment commentPatchDtoToComment (CommentDto.Patch patch);


    @Mapping(source = "question.questionId", target = "questionId")
    @Mapping(source = "member.memberId", target = "memberId")
    @Mapping(source = "member.nickname", target = "nickname")
    CommentResponseDto commentToCommentResponseToDto(Comment comment);

    List<CommentResponseDto> commentsToCommentsResponseDto (List<Comment> comments);

}
