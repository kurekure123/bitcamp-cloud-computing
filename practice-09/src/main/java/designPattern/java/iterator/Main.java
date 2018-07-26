package designPattern.java.iterator;

public class Main {
    public static void main(String[] args){
        BookShelf bookShelf = new BookShelf(4);
        bookShelf.setLast(new Book("Around the World in 80"));
        bookShelf.setLast(new Book("Bible"));
        bookShelf.setLast(new Book("Cinderella"));
        bookShelf.setLast(new Book("Daddy-Long-Legs"));
        Iterator it = bookShelf.iterator();
        while(it.hasNext()){
            Book book = (Book)it.next();
            System.out.println(book.getName());
        }
    }
}
