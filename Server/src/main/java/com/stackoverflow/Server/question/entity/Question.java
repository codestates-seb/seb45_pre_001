package com.stackoverflow.Server.question.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.stackoverflow.Server.comment.entity.Comment;
import com.stackoverflow.Server.member.entity.Member;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Setter
@Getter
@Entity
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long questionId;

    @Column(nullable = false)
    private String title;

    @Enumerated(value = EnumType.STRING)
    private QuestionStatus questionStatus = QuestionStatus.QUESTION_NOT_COMMENTED;

    private Long commentCount = 0l;

    @Column(nullable = false)
    private String questionBody;

    @Column(name = "CREATED_AT")
    private LocalDateTime createdAt = LocalDateTime.now();

    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    @JsonBackReference
    private Member member;

    @OneToMany(mappedBy = "question", cascade = CascadeType.REMOVE)
    @JsonManagedReference
    private List<Comment> comments = new ArrayList<>();

    public enum QuestionStatus {
        QUESTION_COMMENTED("답변 존재"),
        QUESTION_NOT_COMMENTED("답변 없음");

        @Getter
        private String status;
        QuestionStatus(String status) {
            this.status = status;
        }
    }
}
