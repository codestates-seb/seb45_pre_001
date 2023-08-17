package com.stackoverflow.Server.globaladvice;

import org.hibernate.exception.ConstraintViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler
    public ResponseEntity ConstraintViolationExceptionHandler(ConstraintViolationException e) {
        System.out.println("오류 잡기 성공");
        return new ResponseEntity("오류잡기 성공", HttpStatus.BAD_REQUEST);
    }
}
