package designPattern.java.iterator;

public class BookShelf implements Aggregate{
	private Book[] books;
	private int last;
	
	
	public BookShelf(int maxsize) {
		this.books = new Book[maxsize];
	}
	public Book getBooks(int index) {
		return books[index];
	}
	public int getLast() {
		return last;
	}
	public void setLast(Book book) {
		this.books[last] = book;
		last++
		;
	}

	public Iterator iterator() {
		return new BookShelfIterator(this);
	}
	
	
}
