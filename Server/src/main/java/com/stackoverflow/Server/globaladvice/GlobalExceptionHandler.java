package com.stackoverflow.Server.globaladvice;

import com.stackoverflow.Server.exception.BusinessLogicException;
import com.stackoverflow.Server.response.ErrorResponse;
import org.hibernate.exception.ConstraintViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;


import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RestControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler
    public ResponseEntity ConstraintViolationExceptionHandler(ConstraintViolationException e) {
        List<String> response = new ArrayList<>();
        response.add(e.getCause().toString());
        return new ResponseEntity(response, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler
    public ResponseEntity BusinessLogicException(BusinessLogicException e) {
        String response = e.getMessage();
        return new ResponseEntity(response, HttpStatus.BAD_REQUEST);
    }
}
