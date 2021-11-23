package com.luxury.domain;

import java.io.Serializable;
import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.luxury.domain.enums.Uf;

@Entity
public class Veiculo implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String marca;
	private String nome;
	private String modelo;
	private String ano;
	private String cor;

	@Column(unique = true)
	private Integer placa;

	@Column(unique = true)
	private Integer chassi;

	@Column(unique = true)
	private Integer renavan;

	private String combustivel;
	private String descrição;

	private Integer vCompra;
	private Uf uf;

	@JsonFormat(pattern = "dd/MM/yyyy")
	private Date dataCompra;

	public Veiculo() {
		super();
	}

	public Veiculo(Integer id, String marca, String nome, String modelo, String ano, String cor, Integer placa,
			Integer chassi, Integer renavan, String combustivel, String descrição, Integer vCompra, Uf uf) {
		super();
		this.id = id;
		this.marca = marca;
		this.nome = nome;
		this.modelo = modelo;
		this.ano = ano;
		this.cor = cor;
		this.placa = placa;
		this.chassi = chassi;
		this.renavan = renavan;
		this.combustivel = combustivel;
		this.descrição = descrição;
		this.vCompra = vCompra;
		this.uf = uf;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getMarca() {
		return marca;
	}

	public void setMarca(String marca) {
		this.marca = marca;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getModelo() {
		return modelo;
	}

	public void setModelo(String modelo) {
		this.modelo = modelo;
	}

	public String getAno() {
		return ano;
	}

	public void setAno(String ano) {
		this.ano = ano;
	}

	public String getCor() {
		return cor;
	}

	public void setCor(String cor) {
		this.cor = cor;
	}

	public Integer getPlaca() {
		return placa;
	}

	public void setPlaca(Integer placa) {
		this.placa = placa;
	}

	public Integer getChassi() {
		return chassi;
	}

	public void setChassi(Integer chassi) {
		this.chassi = chassi;
	}

	public Integer getRenavan() {
		return renavan;
	}

	public void setRenavan(Integer renavan) {
		this.renavan = renavan;
	}

	public String getCombustivel() {
		return combustivel;
	}

	public void setCombustivel(String combustivel) {
		this.combustivel = combustivel;
	}

	public String getDescrição() {
		return descrição;
	}

	public void setDescrição(String descrição) {
		this.descrição = descrição;
	}

	public Integer getvCompra() {
		return vCompra;
	}

	public void setvCompra(Integer vCompra) {
		this.vCompra = vCompra;
	}

	public Uf getUf() {
		return uf;
	}

	public void setUf(Uf uf) {
		this.uf = uf;
	}

	public Date getDataCompra() {
		return dataCompra;
	}

	public void setDataCompra(Date dataCompra) {
		this.dataCompra = dataCompra;
	}

}
