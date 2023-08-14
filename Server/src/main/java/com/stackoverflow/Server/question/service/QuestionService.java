package com.stackoverflow.Server.question.service;


import com.stackoverflow.Server.question.entity.Question;
import com.stackoverflow.Server.question.repository.QuestionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;


@Service
@RequiredArgsConstructor
@Transactional
public class QuestionService {

    private final QuestionRepository questionRepository;

    public Question createQuestion(Question question) {

        return questionRepository.save(question);
    }

    public Page<Question> findQuestions(int page, int size) {
        return questionRepository.findAll(
                PageRequest.of(page, size, Sort.by("questionId").descending())
        );
    }

    public Page<Question> searchQuestions(String title, Pageable pageable) {
        return questionRepository.findByTitleContaining(title, pageable);
    }
}