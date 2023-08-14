package com.stackoverflow.Server.member.service;

import com.stackoverflow.Server.auth.MemberAuthorityUtils;
import com.stackoverflow.Server.exception.BusinessLogicException;
import com.stackoverflow.Server.exception.ExceptionCode;
import com.stackoverflow.Server.member.entity.Member;
import com.stackoverflow.Server.member.repository.MemberRepository;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MemberService {
    private MemberRepository memberRepository;
    private PasswordEncoder passwordEncoder;
    private MemberAuthorityUtils authorityUtils;

    public MemberService(MemberRepository memberRepository, PasswordEncoder passwordEncoder, MemberAuthorityUtils authorityUtils) {
        this.memberRepository = memberRepository;
        this.passwordEncoder = passwordEncoder;
        this.authorityUtils = authorityUtils;
    }

    public Member creatMember(Member member) {
        verifyExistsEmail(member.getEmail());
        String encryptedPassword = passwordEncoder.encode(member.getPassword());
        member.setPassword(encryptedPassword);

        List<String> roles = authorityUtils.createRoles(member.getEmail());
        member.setRoles(roles);

        return memberRepository.save(member);
    }

    public Member findMember(long memberId) {
        Optional<Member> findMember = memberRepository.findById(memberId);
        Member responseMember = findMember.orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));

        return responseMember;
    }


    public void verifyExistsEmail(String email) {
        Optional<Member> findMember = memberRepository.findByEmail(email);
        if(findMember.isPresent()) throw new BusinessLogicException(ExceptionCode.MEMBER_EXIST);
    }
}
