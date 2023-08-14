package com.stackoverflow.Server.member.dto;

import lombok.Getter;

import javax.persistence.Id;

@Getter
public class MemberPostDto {
    private String nickname;
    private String email;
    private String password;
}
