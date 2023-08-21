package com.stackoverflow.Server.question.service;


import com.stackoverflow.Server.exception.BusinessLogicException;
import com.stackoverflow.Server.exception.ExceptionCode;
import com.stackoverflow.Server.member.entity.Member;
import com.stackoverflow.Server.member.repository.MemberRepository;
import com.stackoverflow.Server.member.service.MemberService;
import com.stackoverflow.Server.question.entity.Question;
import com.stackoverflow.Server.question.repository.QuestionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import java.util.List;
import java.util.Optional;


@Service
@RequiredArgsConstructor
@Transactional
public class QuestionService {

    private final MemberService memberService;
    private final QuestionRepository questionRepository;
    private final MemberRepository memberRepository;

    public Question createQuestion(Question question) {
        Member member = question.getMember();
        Optional<Member> verifiedMember = memberRepository.findById(member.getMemberId());
        if (!verifiedMember.isPresent()) {
            throw new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND);
        }
        question.setMember(member);
        return questionRepository.save(question);
    }

    public Question updateQuestion(Question question) {
        Question findquestion = findQuestion(question.getQuestionId());
        Optional.ofNullable(question.getTitle())
                .ifPresent(content -> findquestion.setTitle(content));
        Optional.ofNullable(question.getQuestionBody())
                .ifPresent(content -> findquestion.setQuestionBody(content));

        Question savedQuestion = questionRepository.save(findquestion);

        return savedQuestion;
    }

    public Question findQuestion(long questionId) {
        return questionRepository.findByIdWithAll(questionId)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));
    }

    public List<Question> findQuestions() {
        return questionRepository.findAll();
    }

    public void removeQuestion(long questionId) {
        Question question = findQuestion(questionId);
        memberService.verifyMemberOwnership(question.getMember().getNickname());
        questionRepository.deleteById(questionId);

        if (question.getQuestionStatus() == Question.QuestionStatus.QUESTION_NOT_COMMENTED) {
            questionRepository.deleteById(questionId);
        } else {
            throw new BusinessLogicException(ExceptionCode.COMMENT_EXISTS);
        }

    }

    public Page<Question> searchQuestions(String title, Pageable pageable) {
        return questionRepository.findByTitleContaining(title, pageable);
    }
}
