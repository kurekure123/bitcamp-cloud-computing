package bitcamp.pms.domain;

public class Board {
	protected int bno;
	protected String titl;
	protected String cont;
	protected String cdt;
	
	public int getBno() {
		return bno;
	}
	public void setBno(int bno) {
		this.bno = bno;
	}
	public String getTitl() {
		return titl;
	}
	public void setTitl(String titl) {
		this.titl = titl;
	}
	public String getCont() {
		return cont;
	}
	public void setCont(String cont) {
		this.cont = cont;
	}
	public String getCdt() {
		return cdt;
	}
	public void setCdt(String cdt) {
		this.cdt = cdt;
	}
}

