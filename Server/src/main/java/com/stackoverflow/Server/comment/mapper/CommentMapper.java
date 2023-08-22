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


    default CommentResponseDto commentToCommentResponseToDto(Comment comment){
        CommentResponseDto commentResponseDto = new CommentResponseDto();
        commentResponseDto.setCommentId(comment.getCommentId());
        commentResponseDto.setNickname(comment.getMember().getNickname());
        commentResponseDto.setMemberId(comment.getMember().getMemberId());
        commentResponseDto.setQuestionId(comment.getQuestion().getQuestionId());
        commentResponseDto.setCommentBody(comment.getCommentBody());
        commentResponseDto.setCreatedAt(comment.getCreatedAt());
        return commentResponseDto;
    }

    List<CommentResponseDto> commentsToCommentsResponseDto (List<Comment> comments);

}
