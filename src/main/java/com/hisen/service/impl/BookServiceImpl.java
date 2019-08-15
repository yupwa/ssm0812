package com.hisen.service.impl;

import com.hisen.dao.BookDao;
import com.hisen.entity.Book;
import com.hisen.service.BookService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

//此类用于实现bookservice接口，将bookdao接口中的方法在bookservice接口下实现
@Service
public class BookServiceImpl implements BookService {

    @Autowired//自动装配BookDao
    private BookDao bookDao;

    @Override
    public Book getById(long bookId) {
        return bookDao.queryById(bookId);
    }

    @Override
    public List<Book> getList(int start, int pageNum) {
        return bookDao.queryAll(start, pageNum);
    }

    @Override
    public int addBook(Book book) {
        return bookDao.addBook(book);
    }

    @Override
    public int updateBook(Book book) {
        return bookDao.updateBook(book);
    }

    @Override
    public int deleteBookById(long id) {
        return bookDao.deleteBookById(id);
    }

    @Override
    public int countNum() {
        return bookDao.countNum();
    }
}
