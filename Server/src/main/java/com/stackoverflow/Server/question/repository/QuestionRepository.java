package com.stackoverflow.Server.question.repository;

import com.stackoverflow.Server.question.entity.Question;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface QuestionRepository extends JpaRepository<Question, Long> {
    Page<Question> findByTitleContaining(String title, Pageable pageable);
    @Query("select question from Question question where question.questionId = :questionId")
    Optional<Question> findByIdWithAll(@Param("questionId") Long questionID);
}
