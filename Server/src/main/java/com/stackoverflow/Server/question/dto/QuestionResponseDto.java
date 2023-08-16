package com.stackoverflow.Server.question.dto;

import com.stackoverflow.Server.member.entity.Member;
import com.stackoverflow.Server.question.entity.Question;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class QuestionResponseDto {
    private String nickname;
    private long memberId;
    private long questionId;
    private String title;
    private String questionBody;
    private Question.QuestionStatus questionStatus;
    private LocalDateTime createdAt;

    public Member getMember() {
        Member member = new Member();
        member.setMemberId(memberId);
        member.setNickname(nickname);
        return member;
    }

    public String getQuestionStatus() {
        return questionStatus.getStatus();
    }
}
