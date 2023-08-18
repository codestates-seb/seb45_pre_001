package com.stackoverflow.Server.comment.repository;

import com.stackoverflow.Server.comment.entity.Comment;
import com.stackoverflow.Server.question.entity.Question;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;


public interface CommentRepository extends JpaRepository<Comment, Long> {

    Optional<Comment> findById(Long questionId);

    @Query("select comment from Comment comment where comment.question.questionId = :questionId")
    Optional<Comment> findByIdWithAll(@Param("questionId") Long questionID);
}
