package com.stackoverflow.Server.comment.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.stackoverflow.Server.member.entity.Member;
import com.stackoverflow.Server.question.entity.Question;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


import java.time.LocalDateTime;

import javax.persistence.*;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long commentId;

    @Column(nullable = false)
    private String nickname;

    @Column(columnDefinition = "Text" ,nullable = false)
    private String commentBody;

    @Column(nullable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

    //한명의 유저가 여러개의 답변을 남길 수 있음
    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    @JsonBackReference
    private Member member;

    //한개의 질문에 여러개의 답변이 달릴 수 있음
    @ManyToOne
    @JoinColumn(name = "QUESTION_ID")
    @JsonBackReference
    private Question question;
}
