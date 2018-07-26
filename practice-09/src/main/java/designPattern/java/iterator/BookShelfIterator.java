package designPattern.java.iterator;

public class BookShelfIterator implements Iterator{
    private BookShelf bookShelf;
    private int index;
    public BookShelfIterator(BookShelf bookShelf){
        this.bookShelf =bookShelf;
        this.index = 0;
    }
    public boolean hasNext(){
        if(index<bookShelf.getLast()){
            return true;
        }else{
            return false;
        }
    }
    public Object next(){
        Book book = bookShelf.getBooks(index);
        index++;
        return book;
    }
}
