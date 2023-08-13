package com.stackoverflow.Server.question.mapper;

import com.stackoverflow.Server.question.dto.QuestionDto;
import com.stackoverflow.Server.question.entity.Question;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-08-14T02:06:39+0900",
    comments = "version: 1.5.3.Final, compiler: javac, environment: Java 11.0.18 (Azul Systems, Inc.)"
)
@Component
public class QuestionMapperImpl implements QuestionMapper {

    @Override
    public Question questionPostToQuestion(QuestionDto.Post questionDto) {
        if ( questionDto == null ) {
            return null;
        }

        Question question = new Question();

        question.setTitle( questionDto.getTitle() );
        question.setQuestionBody( questionDto.getQuestionBody() );

        return question;
    }

    @Override
    public List<QuestionDto.response> questionsToQuestionResponse(List<Question> questions) {
        if ( questions == null ) {
            return null;
        }

        List<QuestionDto.response> list = new ArrayList<QuestionDto.response>( questions.size() );
        for ( Question question : questions ) {
            list.add( questionToresponse( question ) );
        }

        return list;
    }

    protected QuestionDto.response questionToresponse(Question question) {
        if ( question == null ) {
            return null;
        }

        long questionId = 0L;
        String title = null;
        String questionBody = null;

        if ( question.getQuestionId() != null ) {
            questionId = question.getQuestionId();
        }
        title = question.getTitle();
        questionBody = question.getQuestionBody();

        QuestionDto.response response = new QuestionDto.response( questionId, title, questionBody );

        return response;
    }
}
