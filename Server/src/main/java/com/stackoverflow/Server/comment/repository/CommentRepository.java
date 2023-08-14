package com.stackoverflow.Server.comment.repository;

import com.stackoverflow.Server.comment.entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentRepository extends JpaRepository<Comment, Long> {
}
