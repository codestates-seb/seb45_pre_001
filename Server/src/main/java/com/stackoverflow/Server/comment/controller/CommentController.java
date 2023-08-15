package com.stackoverflow.Server.comment.controller;

import com.stackoverflow.Server.comment.dto.CommentPostDto;
import com.stackoverflow.Server.comment.entity.Comment;
import com.stackoverflow.Server.comment.mapper.CommentMapper;
import com.stackoverflow.Server.comment.service.CommentService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@RequestMapping("/questions/{question-id}/comments")
@Validated
public class CommentController {
    private final CommentService commentService;
    private final CommentMapper mapper;

    public CommentController(CommentService commentService, CommentMapper mapper) {
        this.commentService = commentService;
        this.mapper = mapper;
    }

    //질문에 대한 답변을 등록
    @PostMapping
    public ResponseEntity postComment(@RequestBody @Valid CommentPostDto commentPostDto,
                                      @PathVariable("question-id") @Positive long questionId){

        Comment postComment = mapper.commentPostDtoToComment(commentPostDto);
        Comment response = commentService.createComment(postComment);

        return new ResponseEntity<>(mapper.commentToCommentResponseDto(response), HttpStatus.CREATED);
    }

    //답변 조회
    //@GetMapping
}
