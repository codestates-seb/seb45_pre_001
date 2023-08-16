package com.stackoverflow.Server.question.controller;

import com.stackoverflow.Server.dto.MultiResponseDto;
import com.stackoverflow.Server.question.dto.QuestionDto;
import com.stackoverflow.Server.question.entity.Question;
import com.stackoverflow.Server.question.mapper.QuestionMapper;
import com.stackoverflow.Server.question.service.QuestionService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@RequiredArgsConstructor
@Validated
@RequestMapping("/questions")
public class QuestionController {

    private final QuestionService questionService;
    private final QuestionMapper mapper;

    @PostMapping("/new-questions")
    public ResponseEntity postQuestion(@RequestBody QuestionDto.Post postDto) {

        Question question = mapper.questionPostToQuestion(postDto);
        Question createQuestion = questionService.createQuestion(question);

        return new ResponseEntity<>(question, HttpStatus.CREATED);
    }

    @GetMapping("/{questionId}")
    public ResponseEntity getQuestion(@PathVariable("questionId") @Positive long questionId) {
        Question question = questionService.findQuestion(questionId);
        return new ResponseEntity<>(mapper.questionToQuestionResponse(question), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getQuestions(@Positive @RequestParam int page,
                                        @Positive @RequestParam int size) {

        Page<Question> pages = questionService.findQuestions(page - 1, size);
        List<Question> questions = pages.getContent();

        return new ResponseEntity<>(
                new MultiResponseDto<>(mapper.questionsToQuestionResponse(questions),
                        pages), HttpStatus.OK);
    }

    @GetMapping("/search")
    public ResponseEntity questionFindByTitle(@RequestBody QuestionDto.search search,
                                              @RequestParam @Positive int page) {
        Pageable pageable = PageRequest.of(page - 1, 10, Sort.by("createdAt").descending());
        Page<Question> questionPage = questionService.searchQuestions(search.getTitle(), pageable);
        List<Question> questions = questionPage.getContent();

        return new ResponseEntity(new MultiResponseDto(mapper.questionsToQuestionResponse(questions), questionPage), HttpStatus.OK);
    }
}
