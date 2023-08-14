package com.stackoverflow.Server.member.dto;

import com.stackoverflow.Server.question.entity.Question;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;
@Getter
@Setter
public class MemberResponseDto {
    private String nickname;
    private String email;
    private List<Question> questions = new ArrayList<>();
    private List<String> roles = new ArrayList<>();
}
