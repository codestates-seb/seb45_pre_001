package com.stackoverflow.Server.comment.repository;

import com.stackoverflow.Server.comment.entity.Comment;
import com.stackoverflow.Server.question.entity.Question;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;


public interface CommentRepository extends JpaRepository<Comment, Long> {

    List<Comment> findAllByQuestion(Question question);
    Long countByQuestion (Question question);

}
