import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Ajoutez ici le code JavaScript

    const allDropdown = document.querySelectorAll('#sidebar .side-dropdown');
    const sidebar = document.getElementById('sidebar');

    allDropdown.forEach(item => {
      const a = item.parentElement?.querySelector('a:first-child'); // Utilisation de l'opérateur de navigation sécurisée
      if (a) {
        a.addEventListener('click', (e) => { // Utilisation d'une fonction de flèche
          e.preventDefault();
    
          const target = e.target as HTMLElement; // Capturer la référence à l'élément cliqué
          if (!target.classList.contains('active')) {
            allDropdown.forEach(i => {
              const aLink = i.parentElement?.querySelector('a:first-child'); // Utilisation de l'opérateur de navigation sécurisée
    
              if (aLink) { // Vérification de null
                aLink.classList.remove('active');
                i.classList.remove('show');
              }
            });
          }
    
          target.classList.toggle('active'); // Utiliser la référence capturée à l'élément cliqué
          item.classList.toggle('show');
        });
      }
    });

    const toggleSidebar = document.querySelector('nav .toggle-sidebar');
    const allSideDivider = document.querySelectorAll('#sidebar .divider');

    if (sidebar && toggleSidebar) {
      toggleSidebar.addEventListener('click', function () {
        sidebar.classList.toggle('hide');

        if (sidebar.classList.contains('hide')) {
          allSideDivider.forEach(item => {
            if (item instanceof HTMLElement) { // Vérification du type HTMLElement
              item.textContent = '-';
            }
          });

          allDropdown.forEach(item => {
            const a = item.parentElement?.querySelector('a:first-child');
            if (a) {
              a.classList.remove('active');
              item.classList.remove('show');
            }
          });
        } else {
          allSideDivider.forEach(item => {
            if (item instanceof HTMLElement && item.dataset['text']) { // Vérification du type HTMLElement et de la présence de dataset.text
              item.textContent = item.dataset['text'];
            }
          });
        }
      });
    }

    if (sidebar) {
      sidebar.addEventListener('mouseleave', function () {
        if (sidebar.classList.contains('hide')) {
          allDropdown.forEach(item => {
            const a = item.parentElement?.querySelector('a:first-child');
            if (a) {
              a.classList.remove('active');
              item.classList.remove('show');
            }
          });
          allSideDivider.forEach(item => {
            if (item instanceof HTMLElement) { // Vérification du type HTMLElement
              item.textContent = '-';
            }
          });
        }
      });

      sidebar.addEventListener('mouseenter', function () {
        if (sidebar.classList.contains('hide')) {
          allDropdown.forEach(item => {
            const a = item.parentElement?.querySelector('a:first-child');
            if (a) {
              a.classList.remove('active');
              item.classList.remove('show');
            }
          });
          allSideDivider.forEach(item => {
            if (item instanceof HTMLElement && item.dataset['text']) { // Vérification du type HTMLElement et de la présence de dataset.text
              item.textContent = item.dataset['text'];
            }
          });
        }
      });
    }

    const profile = document.querySelector('nav .profile');
  if (profile) {
    const imgProfile = profile.querySelector('img');
    const dropdownProfile = profile.querySelector('.profile-link');

    if (imgProfile && dropdownProfile) {
      imgProfile.addEventListener('click', function () {
        dropdownProfile.classList.toggle('show');
      });
    }
  }
  }
}
