package com.stackoverflow.Server.member.service;

import com.stackoverflow.Server.member.entity.Member;
import com.stackoverflow.Server.member.repository.MemberRepository;
import org.springframework.stereotype.Service;

@Service
public class MemberService {
    private MemberRepository memberRepository;
    public MemberService(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }

    public Member creatMember() {

        Member member = new Member();
        member.setMemberId(1L);
        member.setEmail("test@gmail.com");
        member.setPassword("123123!");
        member.setNickname("test");

        return member;
    }
}
