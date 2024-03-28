package com.stackoverflow.Server.comment.controller;

import com.stackoverflow.Server.comment.dto.CommentDto;
import com.stackoverflow.Server.comment.entity.Comment;
import com.stackoverflow.Server.comment.mapper.CommentMapper;
import com.stackoverflow.Server.comment.service.CommentService;
import lombok.RequiredArgsConstructor;
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
    public ResponseEntity postComment(@Valid @RequestBody CommentDto.Post post,
                                      @PathVariable("question-id") @Positive long questionId){

        //commentPostDto.setQuestionId(questionId);
        Comment postComment = mapper.commentPostDtoToComment(post);
        Comment response = commentService.createComment(postComment);

        return new ResponseEntity<>(mapper.commentToCommentResponseToDto(response), HttpStatus.CREATED);
    }

    //답변 수정
    @PatchMapping("/{comment-id}")
    public ResponseEntity patchComment (@PathVariable("question-id") @Positive long questionId,
                                        @PathVariable("comment-id") @Positive long commentId,
                                        @RequestBody @Valid CommentDto.Patch commentPatchDto){

        commentPatchDto.setCommentId(commentId);
        Comment patchComment = mapper.commentPatchDtoToComment(commentPatchDto);
        Comment response = commentService.updateComment(patchComment);

        return new ResponseEntity<>(mapper.commentToCommentResponseToDto(response), HttpStatus.OK);
    }

    //답변 조회
    @GetMapping
    public ResponseEntity getComments (@PathVariable("question-id") @Positive long questionId){
        List<Comment> comment = (List<Comment>) commentService.findCommentAll(questionId);

        return new ResponseEntity<>(mapper.commentsToCommentsResponseDto(comment), HttpStatus.OK);
    }

    //답변 삭제
    @DeleteMapping("/{comment-id}")
    public ResponseEntity deleteComment (@PathVariable("question-id") @Positive long questionId,
                                         @PathVariable("comment-id") @Positive long commentId){

        commentService.deleteComment(questionId, commentId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
