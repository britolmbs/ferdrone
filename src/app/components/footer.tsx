'use client'
import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
        const current_year = new Date().getFullYear()
        return (
            <footer className="footer text-center py-6 border-t border-gray-300">
            <div className=" container mx-auto px-4">
                <nav className="mb-4 flex justify-center items-center space-x-4">
                <Link href="mailto:teste@hotmail.com" aria-label="Enviar e-mail para contato" className="btn-link text-blue-600 hover:underline">
                Contato</Link>
                <Link href="https://www.instagram.com/ferdrone_imagens_aereas" aria-label="Visite nosso Instagram" className="btn-link text-blue-600 hover:underline">
                <FontAwesomeIcon icon={faInstagram}size="lg" /></Link>
                </nav>
                <p className="text-sm text-gray-500">Copyright &copy; {current_year}, Ferdrone Imagens Aéreas. Todos os direitos reservados.</p>
                
            </div>
            </footer>
        );
    }
    
    export default Footer;
