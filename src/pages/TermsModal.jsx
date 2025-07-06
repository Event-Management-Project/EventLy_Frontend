import React from "react";
import ModalWrapper from "./ModalWrapper";

const TermsModal = ({ isOpen, onClose }) => (
  <ModalWrapper isOpen={isOpen} onClose={onClose} title="Terms & Conditions">
    <p>
      Welcome to Evently. By using this platform, you agree to the following
      terms:
    </p>
    <ul className="list-disc list-inside space-y-2">
      <li>
        You are responsible for the information you provide on the platform.
      </li>
      <li>We reserve the right to change or remove events.</li>
      <li>Violation of our policies may result in account suspension.</li>
    </ul>
    <p className="text-xs italic text-gray-500 mt-6">
      Last updated: August 1, 2025
    </p>
  </ModalWrapper>
);

export default TermsModal;
