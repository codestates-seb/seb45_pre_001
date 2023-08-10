package com.stackoverflow.Server.question.controller;

import com.stackoverflow.Server.question.dto.QuestionDto;
import com.stackoverflow.Server.question.entity.Question;
import com.stackoverflow.Server.question.mapper.QuestionMapper;
import com.stackoverflow.Server.question.service.QuestionService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/questions")
public class QuestionController {

    private final QuestionService questionService;
    private final QuestionMapper mapper;

    @PostMapping("/new-questions")
    public ResponseEntity postQuestion(@RequestBody QuestionDto.Post postDto) {

        Question question = mapper.questionPostToQuestion(postDto);

        Question createQuestion = questionService.createQuestion(question);

        return new ResponseEntity<>(createQuestion, HttpStatus.CREATED);
    }
}
