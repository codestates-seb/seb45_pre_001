package com.stackoverflow.Server.question.repository;

import com.stackoverflow.Server.question.entity.Question;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuestionRepository extends JpaRepository<Question, Long> {

}
