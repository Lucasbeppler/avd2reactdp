import React, { useState } from "react";
import { Container } from "./styles";
import logo from "../../assets/logo.jpeg";
import Modal from "react-modal";
import axios from 'axios';

export function Header() {
    return (
        <Container>
            <div className="logo">
                <img src={logo} />
                <strong>Lucas Beppler</strong>
            </div>
        </Container>
    );
}