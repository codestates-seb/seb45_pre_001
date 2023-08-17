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
@CrossOrigin
public class QuestionController {

    private final QuestionService questionService;
    private final QuestionMapper mapper;

    @PostMapping("/new-questions")
    public ResponseEntity postQuestion(@RequestBody QuestionDto.Post postDto) {

        Question question = mapper.questionPostToQuestion(postDto);
        Question createQuestion = questionService.createQuestion(question);

        return new ResponseEntity<>(question, HttpStatus.CREATED);
    }

    @PatchMapping("/{question-id}")
    public ResponseEntity patchQuestion(@PathVariable("question-id") @Positive long questionId,
                                        @RequestBody QuestionDto.Patch patchDto) {
        patchDto.setQuestionId(questionId);
        Question question = questionService.updateQuestion(mapper.questionPatchDtoToQuestion(patchDto));

        return new ResponseEntity<>(mapper.questionToQuestionResponse(question), HttpStatus.OK);
    }

    @GetMapping("/{question-id}")
    public ResponseEntity getQuestion(@PathVariable("question-id") @Positive long questionId) {
        Question question = questionService.findQuestion(questionId);
        return new ResponseEntity<>(mapper.questionToQuestionResponse(question), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getQuestions(@Positive @RequestParam int page,
                                        @Positive @RequestParam(required = false,defaultValue = "15") int size) {

        Page<Question> pages = questionService.findQuestions(page - 1, size);
        List<Question> questions = pages.getContent();

        return new ResponseEntity<>(
                new MultiResponseDto<>(mapper.questionsToQuestionResponse(questions),
                        pages), HttpStatus.OK);
    }

    @GetMapping("/search")
    public ResponseEntity questionFindByTitle(@RequestBody QuestionDto.search search,
                                              @RequestParam(required = false, defaultValue = "1") @Positive int page,
                                              @RequestParam(required = false, defaultValue = "15") int size) {
        Pageable pageable = PageRequest.of(page - 1, size, Sort.by("createdAt").descending());
        Page<Question> questionPage = questionService.searchQuestions(search.getTitle(), pageable);
        List<Question> questions = questionPage.getContent();

        return new ResponseEntity(new MultiResponseDto(mapper.questionsToQuestionResponse(questions), questionPage), HttpStatus.OK);
    }

    @DeleteMapping("/{question-id}")
    public ResponseEntity deleteQuestion(@PathVariable("question-id") @Positive long questionId){
        questionService.removeQuestion(questionId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
